import Leave from "../models/Leave.js";

export const applyLeave = async (req, res) => {
  const leave = await Leave.create({
    employee: req.user.id,
    ...req.body
  });
  res.json(leave);
};

export const approveLeave = async (req, res) => {
  const leave = await Leave.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );
  res.json(leave);
};
