// require('dotenv').config() // for env variables

module.exports = async (req, res) => {

    return res.stats(200).json({
        success: true,
        message: "This is an example api message."
    })


}