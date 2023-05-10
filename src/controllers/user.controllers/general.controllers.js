export const user = async (req, res) => {
    res.status(200).json({message: "Hola desde el controlador user"});
};

export const test_upload = async (req, res) => {
    const test_file = req.files['voucher'] ? req.files['voucher'][0]?.filename : null;
    res.status(200).json({name_file: test_file});
};