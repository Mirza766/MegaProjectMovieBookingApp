const { CallBookingBooked } = require('../models/callbookingbookedSlots-model');

const BookedSlots = async (req, res) => {
  try {
    const { SelectedSlot } = req.body;

    if (!SelectedSlot) {
      return res.status(400).json({ message: "No slot provided" });
    }

    const updatedBookedDoc = await CallBookingBooked.findOneAndUpdate(
      {}, 
      { $addToSet: { bookedSlots: SelectedSlot } }, 
      { upsert: true, new: true }
    );

    return res.status(200).json({
      msg: "Booked Slot Saved Successfully",
      bookedSlots: updatedBookedDoc.bookedSlots
    });
  } catch (error) {
    console.error("Error in BookedSlots:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const GetBookedSlots = async (req, res) => {
  try {
    const callbooking = await CallBookingBooked.findOne();

    if (!callbooking) {
      return res.status(404).json({ message: "No Booked Slots Found", bookedSlots: [] });
    }

  
    res.status(200).json(callbooking);
  }
  catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

module.exports = { BookedSlots, GetBookedSlots };