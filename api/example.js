// require('dotenv').config() // for env variables

module.exports = async (req, res) => {

    return res.status(200).json({
        success: true,
        message: "This is an example api message."
    })


}