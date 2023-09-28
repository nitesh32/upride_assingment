import React, { useState } from "react";
import imgview from "./assets/images/imgview.png";
import profile from "./assets/images/profile.png";

export const Booking = () => {
  var data_off = {};
  var data_on = {};
  var active = [];
  var completed = [];
  var cancelled = [];
  const [initial, setCount] = useState(active);
  const apiUrl = "https://upride-internships-default-rtdb.firebaseio.com/.json";

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      data_off = data.offline_bookings;
      data_on = data.online_bookings;

      for (let key in data_off) {
        if (data_off[key].bookingStatus === "SUCCESS") {
          var newobj = {};
          newobj.id = data_off[key].bookingID;
          newobj.user_name = data_off[key].clientName;
          newobj.time_date = data_off[key].bookingEpochTime;
          newobj.name = String(data_off[key].bookingEpochTime);
          const dateObject = new Date(data_off[key].bookingEpochTime);
          const year = dateObject.getFullYear();
          const month = dateObject.getMonth() + 1;
          const day = dateObject.getDate();
          newobj.year = year;
          newobj.month = month;
          newobj.day = day;
          newobj.package = data_off[key].packageTitle;
          newobj.mode = "off";
          active.push(newobj);
        }
        if (data_off[key].bookingStatus === "COMPLETED") {
          var newobj = {};
          newobj.id = data_off[key].bookingID;
          newobj.user_name = data_off[key].clientName;
          newobj.time_date = data_off[key].bookingEpochTime;
          newobj.name = String(data_off[key].bookingEpochTime);
          const dateObject = new Date(data_off[key].bookingEpochTime);
          const year = dateObject.getFullYear();
          const month = dateObject.getMonth() + 1;
          const day = dateObject.getDate();
          newobj.year = year;
          newobj.month = month;
          newobj.day = day;
          newobj.package = data_off[key].packageTitle;
          newobj.mode = "off";
          completed.push(newobj);
        }
        if (data_off[key].bookingStatus === "CANCELLED") {
          var newobj = {};
          newobj.id = data_off[key].bookingID;
          newobj.user_name = data_off[key].clientName;
          newobj.time_date = data_off[key].bookingEpochTime;
          newobj.name = String(data_off[key].bookingEpochTime);
          const dateObject = new Date(data_off[key].bookingEpochTime);
          const year = dateObject.getFullYear();
          const month = dateObject.getMonth() + 1;
          const day = dateObject.getDate();
          newobj.year = year;
          newobj.month = month;
          newobj.day = day;
          newobj.package = data_off[key].packageTitle;
          newobj.mode = "off";
          cancelled.push(newobj);
        }
      }

      for (let key in data_on) {
        if (data_on[key].bookingStatus === "SUCCESS") {
          var newobj = {};
          newobj.id = data_on[key].bookingID;
          newobj.user_name = data_on[key].clientName;
          newobj.time_date = data_on[key].bookingEpochTime;
          newobj.name = String(data_on[key].bookingEpochTime);
          const dateObject = new Date(data_on[key].bookingEpochTime);
          const year = dateObject.getFullYear();
          const month = dateObject.getMonth() + 1;
          const day = dateObject.getDate();
          newobj.year = year;
          newobj.month = month;
          newobj.day = day;
          newobj.package = data_on[key].packageTitle;
          newobj.mode = "on";
          active.push(newobj);
        }
        if (data_on[key].bookingStatus === "COMPLETED") {
          var newobj = {};
          newobj.id = data_on[key].bookingID;
          newobj.user_name = data_on[key].clientName;
          newobj.time_date = data_on[key].bookingEpochTime;
          newobj.name = String(data_on[key].bookingEpochTime);
          const dateObject = new Date(data_on[key].bookingEpochTime);
          const year = dateObject.getFullYear();
          const month = dateObject.getMonth() + 1;
          const day = dateObject.getDate();
          newobj.year = year;
          newobj.month = month;
          newobj.day = day;
          newobj.package = data_on[key].packageTitle;
          newobj.mode = "on";
          completed.push(newobj);
        }
        if (data_on[key].bookingStatus === "CANCELLED") {
          var newobj = {};
          newobj.id = data_on[key].bookingID;
          newobj.user_name = data_on[key].clientName;
          newobj.time_date = data_on[key].bookingEpochTime;
          newobj.name = String(data_on[key].bookingEpochTime);
          const dateObject = new Date(data_on[key].bookingEpochTime);
          const year = dateObject.getFullYear();
          const month = dateObject.getMonth() + 1;
          const day = dateObject.getDate();
          newobj.year = year;
          newobj.month = month;
          newobj.day = day;
          newobj.package = data_on[key].packageTitle;
          newobj.mode = "on";
          cancelled.push(newobj);
        }
      }
      // console.log(Object.keys(data_on).length);
      // console.log(Object.keys(data_off).length);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  const sortedObjects = [...initial].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  // setCount(sortedObjects);
  // {console.log(initial)}
  // {console.log(sortedObjects)}

  function handleclick(val) {
    const element = document.getElementById(val);
    const all_btn = document.getElementsByClassName("butt_cont");
    var siz = all_btn.length - 1;
    for (var j = 0; j <= siz; j++) {
      all_btn[j].classList.remove("active");
    }
    document.getElementById(element.id).classList.add("active");
    if (element.id === "active_butt") {
      console.log("active");
      setCount(active);
    } else if (element.id === "completed_butt") {
      console.log("completed");
      setCount(completed);
    } else if (element.id === "cancelled_butt") {
      console.log("cancelled");
      setCount(cancelled);
    }
  }

  return (
    <div id="bookings">
      <div id="top">
        <span>View Bookings</span>
        <img src={imgview} alt="img not available" />
      </div>
      <div id="main_main">
        <div id="controls">
          <div
            id="active_butt"
            className="butt_cont active"
            onClick={() => handleclick("active_butt")}
          >
            Active
          </div>
          <div
            id="completed_butt"
            className="butt_cont"
            onClick={() => handleclick("completed_butt")}
          >
            Completed
          </div>
          <div
            id="cancelled_butt"
            className="butt_cont"
            onClick={() => handleclick("cancelled_butt")}
          >
            Cancelled
          </div>
        </div>
        <div id="line"></div>
        <div id="panal">
          <div id="panel_head">
            <div>Name</div>
            <div>Date</div>
            <div>Package Details</div>
            <div>Payment Mode</div>
          </div>
          <div id="card_container">
            {sortedObjects.map((value) => (
              <>
                <div id="card" key={value.id}>
                  <div id="name" className="card_det">
                    <img src={profile} alt="hello" />
                    {value.user_name}
                  </div>
                  <div id="date" className="card_det">
                    {value.month === 1 ? "Jan" : ""}
                    {value.month === 2 ? "Feb" : ""}
                    {value.month === 3 ? "March" : ""}
                    {value.month === 4 ? "Apr" : ""}
                    {value.month === 5 ? "May" : ""}
                    {value.month === 6 ? "June" : ""}
                    {value.month === 7 ? "July" : ""}
                    {value.month === 8 ? "Aug" : ""}
                    {value.month === 9 ? "Sep" : ""}
                    {value.month === 10 ? "Oct" : ""}
                    {value.month === 11 ? "Nov" : ""}
                    {value.month === 12 ? "Dec" : ""} {value.day} {value.year}
                  </div>
                  <div id="package" className="card_det">
                    {value.package}
                  </div>
                  <div id="payment" className="card_det">
                    {value.mode === "on" ? (
                      <div className="Box_pay_on">Online Payment</div>
                    ) : (
                      <div className="Box_pay_off">Offline Payment</div>
                    )}
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
