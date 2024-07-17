import nodemailer from 'nodemailer';
// email


// notifications



// OTP
export const GenerateOtp = () => {

    const otp = Math.floor(100000 + Math.random() * 900000)
    let expiry = new Date()
    expiry.setTime( new Date().getTime() + (30 * 60 * 1000))

    return { otp, expiry }
}


// Function to send OTP via email
export const sendOTPEmail = async (email: string, otp: number): Promise<void> => {
    try {
      const transporter = nodemailer.createTransport({
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
  
      await transporter.sendMail(mailOptions);
      console.log(`OTP email sent to ${email}`);
    } catch (error) {
      console.error('Error sending OTP email:', error);
      throw error; 
    }
  };

