const { Router } = require("express");
const router = Router();

router.get("/index", (req, res) => {
  res.render("index");
});
router.get("/menu", (req, res) => {
  res.render("menu");
});
router.get("/about", (req, res) => {
  res.render("about");
});
router.get("/reservation", (req, res) => {
  res.render("reservation");
});
router.get("/stuff", (req, res) => {
  res.render("stuff");
});
router.get("/gallery", (req, res) => {
  res.render("gallery");
});
router.get("/contact", (req, res) => {
  res.render("contact");
});

module.exports = router;
