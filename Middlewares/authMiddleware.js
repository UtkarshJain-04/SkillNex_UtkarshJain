import jwt from 'jsonwebtoken'

const protect = (req, res, next) =>{
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(400).json({
            success: false,
            message: 'token not found'
        })
    }
    console.log(authHeader)
    const token  = authHeader.split(' ')[1]
    console.log("token at middleware: ", token)
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        console.log("decoded",decoded)
        req.id = decoded.userId 
        next()
    } catch (err) {
        res.status(400).json({
            success: false,
            message: "Invalid token or token expired"
        })
    }
}
export default protect