exports.sampleRoute = async (req, res) => {
    try {
        const retData = {
            message: "Hi from controller"
        }
        res.status(201).json(retData);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};