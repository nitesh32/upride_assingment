import React, { useState ,useEffect} from "react";
import imgview from "./assets/images/imgview.png";
import profile from "./assets/images/profile.png";

export const Booking = () => {
  var data_off = {};   //storing offline bookings data
  var data_on = {};    //storing online bookings data
  var active = [];     //storing active bookings data
  var completed = [];  //storing completed bookings data
  var cancelled = [];  //storing cancelled bookings data
  
  
  const [num,setNum]=useState(1);
  const [start,setStart] =useState(0);
  const [end,setEnd] =useState(10);
  const [data,setData] =useState({});

  dataassign();
  function dataassign(){

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
          newobj = {};
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
          newobj = {};
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
          newobj = {};
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
           newobj = {};
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
          newobj = {};
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
  }
// fetching data from given url --------------------------------------------------------------
  useEffect(() => {
  const apiUrl = "https://upride-internships-default-rtdb.firebaseio.com/.json";
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      setData(data);
      
      // console.log(Object.keys(data_on).length);
      // console.log(Object.keys(data_off).length);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
    }, []);
    const [initial, setCount] = useState(active);
// sorting and assigning data according to timestamp ---------------------------------------------
  const sortedObjects = [...initial].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  var total = Math.round(sortedObjects.length/10);
  // setCount(sortedObjects);
  // {console.log(initial)}
  // {console.log(sortedObjects)}




// handleclick event is for handling all button actions ------------------------------------
  function handleclick(val) {
    const element = document.getElementById(val);
    const all_btn = document.getElementsByClassName("butt_cont");
    var siz = all_btn.length - 1;
    for (var j = 0; j <= siz; j++) {
      all_btn[j].classList.remove("active");
    }
    document.getElementById(element.id).classList.add("active");
    if (element.id === "active_butt") {
      // console.log("active");
      
      setCount(active);
      
    } else if (element.id === "completed_butt") {
      // console.log("completed");
      setCount(completed);
    } else if (element.id === "cancelled_butt") {
      // console.log("cancelled");
      setCount(cancelled);
    }
    setNum(1);
      setStart(0);
      setEnd(10);
  }


// pagination next button event -----------------------------------------------------
  function gotonext(){
    // setStart(start+10);
    if(num===total){
      return;
    }
    setNum(num+1)
    setStart(start+10);
    setEnd(end+10);

  }

// pagination previous button event -----------------------------------------------------
  function gotoprev(){
    if(num===1){
      return;
    }
    setNum(num-1)
    setStart(start-10);
    setEnd(end-10);
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
            {sortedObjects.slice(start, end).map((value) => (
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

                
            ))}
            <div id="pagination">
            <button onClick={()=>gotoprev()}>PREV</button>
            <h3>{num} out of {total}</h3>
            <button onClick={()=>gotonext()}>NEXT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
