import jwt, { decode } from "jsonwebtoken";
import CryptoJS from "crypto-js";
import connected from "../config/db.js";
import { EMessage } from "./message.js";
export const FindOneUser = async (uuid) => {
    return new Promise(async (resovle, reject) => {
        try {
            const checkuser = "Select * from user where uuid=?";
            connected.query(checkuser, uuid, (err, result) => {
                if (err) reject(err);
                if (!resovle[0]) {
                    resovle(EMessage.NotFound)
                };
                resovle(result[0]);
            });
        } catch (error) {
            return reject(error);
        }
    });
};
export const FindOneOrder = async (oUuid) => {
    return new Promise(async (resovle, reject) => {
        try {
            const checkorder = "Select * from tb_order where oUuid=?";
            connected.query(checkorder, oUuid, (err, result) => {
                if (err) reject(err);
                if (!resovle[0]) {
                    resovle(EMessage.NotFound)
                };
                resovle(result[0]);
            });
        } catch (error) {
            return reject(error);
        }
    });
};
export const FindOneOrderDetail = async (ordUuid) => {
    return new Promise(async (resovle, reject) => {
        try {
            const checkorderDetail = "Select * from order_detail where ordUuid=?";
            connected.query(checkorderDetail, ordUuid, (err, result) => {
                if (err) reject(err);
                if (!resovle[0]) {
                    resovle(EMessage.NotFound)
                };
                resovle(result[0]);
            });
        } catch (error) {
            return reject(error);
        }
    });
};
export const FindOneProduct = async (pUuid) => {
    return new Promise(async (resovle, reject) => {
        try {
            const checkproduct = "Select * from product where pUuid=?";
            connected.query(checkproduct, pUuid, (err, result) => {
                if (err) reject(err);
                if (!resovle[0]) {
                    resovle(EMessage.NotFound)
                };
                resovle(result[0]);
            });
        } catch (error) {
            return reject(error);
        }
    });
};
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
export const VerifyRefreshToken = async (refresh) => {
    return new Promise(async (resovle, reject) => {
        try {
            jwt.verify(refresh, SECREATE_KEY_REFRESH.toString(), async (err, decode) => {
                if (err) return reject(err);
                const decrypt = CryptoJS.AES.decrypt(decode.id, SECREATE_KEY_REFRESH).toString
                    CryptoJS.enc.Utf8
                const checkUuid = "Select * from user where uuid=?";
                connected.query(checkUuid, decrypt, async (error, result) => {
                    if (error) return reject(error);
                    if (!result[0]) return reject(EMessage.Unanthorized);
                    const data = {
                        id: result[0]['uuid']
                    };
                    const token = await GenerateToken(data)
                    if (!token) reject("Error Genpassword");
                    resovle(token);
                });
            });
        } catch (error) {
            return reject(error);
        }
    });

};
export const VerifyToken = async (token) => {
    return new Promise(async (resovle, reject) => {
        try {
            jwt.verify(token, SECREATE_KEY.toString(), async (err, decode) => {
                if (err) return reject(err);
                const decrypt = CryptoJS.AES.decrypt(decode.id, SECREATE_KEY).toString
                    CryptoJS.enc.Utf8
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