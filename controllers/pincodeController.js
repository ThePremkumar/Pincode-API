import axios from 'axios';

export const getPincode = async (req, res, next) => {
  const { pin } = req.params;

  try {
    const response = await axios.get(`https://api.postalpincode.in/pincode/${pin}`);
    if (response.data[0].Status === 'Success') {
      res.json(response.data[0].PostOffice);
    } else {
      res.status(404).json({ message: 'PIN code not found' });
    }
  } catch (err) {
    next(err);
  }
};
