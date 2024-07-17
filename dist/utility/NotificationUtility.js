"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendOTPEmail = exports.GenerateOtp = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
// email
// notifications
// OTP
const GenerateOtp = () => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    let expiry = new Date();
    expiry.setTime(new Date().getTime() + (30 * 60 * 1000));
    return { otp, expiry };
};
exports.GenerateOtp = GenerateOtp;
// Function to send OTP via email
const sendOTPEmail = (email, otp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transporter = nodemailer_1.default.createTransport({
            service: 'gmail',
            auth: {
                user: 'officialashish555@gmail.com',
                pass: 'rynw scxp lgpc ajvs',
            },
        });
        const mailOptions = {
            from: 'officialashish555@gmail.com',
            to: email,
            subject: 'Verification OTP',
            text: `Your OTP for verification is: ${otp}`,
        };
        yield transporter.sendMail(mailOptions);
        console.log(`OTP email sent to ${email}`);
    }
    catch (error) {
        console.error('Error sending OTP email:', error);
        throw error;
    }
});
exports.sendOTPEmail = sendOTPEmail;
//# sourceMappingURL=NotificationUtility.js.map