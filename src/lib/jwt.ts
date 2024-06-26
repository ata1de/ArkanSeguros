import jwt from 'jsonwebtoken'

const secret = process.env.JWT_SECRET ?? ''

export const generateToken = (email: string) =>{
    return jwt.sign({email}, secret, {expiresIn: '1d'})
}

export const verifyToken = (token: string) => {
    try {
        return jwt.verify(token, secret)
    } catch (error) {
        return null
    }
}