import jwt, { decode } from "jsonwebtoken";
import { SECREATE_KEY, SECREATE_KEY_REFRESH } from "../config/globalkey.js";
import CryptoJS from "crypto-js";
import connected from "../config/db.js";
import { EMessage } from "./message.js";
export const checkEmail = async (email) => {
    return new Promise(async (resovle, reject) => {
        try {
            const checkEmail = "Select * from user where email=?";
            connected.query(checkEmail, email, (err, result) => {
                if (err) reject(err);
                if (result[0]) reject("Email Already");
                return resovle(true);
            });
        } catch (error) {
           return reject(error);
        }
    });
};
export const VerityToken = async (token) => {
    return new Promise(async (resovle, reject) => {
        try {
            jwt.verify(token, SECREATE_KEY.toString(), async (err, decode) => {
                if (err) return reject(err);
                const decrypt = CryptoJS.AES.decrypt(decode.id, SECREATE_KEY).toString(
                    CryptoJS.enc.Utf8
                );
                const checkUuid = "Select * from user where uuid=?";
                connected.query(checkUuid, decrypt, (error, result) => {
                    if (error) return reject(error);
                    if (!result[0]) return reject(EMessage.Unanthorized);
                    return resovle(result[0]);
                });
            });
        } catch (error) {
            return reject(error);
        }
    });

};
export const GenerateToken = async (data) => {
    return new Promise(async (resovle, reject) => {
        try {
            const payload = {
                id: CryptoJS.AES.encrypt(data.id, SECREATE_KEY).toString()
            }
            const payload_refresh = {
                id: CryptoJS.AES.encrypt(data.id, SECREATE_KEY_REFRESH).toString()
            }
            const token = jwt.sign(payload, SECREATE_KEY, { expiresIn: "2h" });
            const refreshToken = jwt.sign(payload_refresh, SECREATE_KEY_REFRESH, { expiresIn: "4h" });
            return resovle({ token, refreshToken });
        } catch (error) {
           return reject(error);
        }
    });

};