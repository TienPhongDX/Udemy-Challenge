

exports.getDate = function() {
  let today = new Date();
  //   var currentDay = today.getDay();
  //   var dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  //   var day = dayName[currentDay];
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let day = today.toLocaleDateString("vi-VN", options);

  return day;
}

exports.getDay = function() {
  let today = new Date();
  //   var currentDay = today.getDay();
  //   var dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  //   var day = dayName[currentDay];
  const options = {
    weekday: "long"
  };
  let day = today.toLocaleDateString("vi-VN", options);

  return day;
}