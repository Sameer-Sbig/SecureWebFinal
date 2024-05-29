
import React, { useState } from "react";
import classes from "./InwardForm.module.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from '@mui/icons-material/Add';
import Add from "@mui/icons-material/Add";
import { NavLink , useNavigate } from "react-router-dom";

const InwardForm = () => {
  const [count, setCount] = useState(0);
  const [displayIcon, setDisplayIcon] = useState(true);

  const addDiv = () => {
    setCount(count + 1);
    setDisplayIcon(false);
  };
  const deleteDiv = () => {
    setCount(count - 1);
  };

  const navigate = useNavigate();

  return (
    <>
      <div className={classes.main}>
          <div className={classes.form_div}>
            <form action="" className={classes.form}>
              <div className={classes.form_div1}>
                <label>Inward Type*:</label>
                <select name="" id="">
                  <option value="">Select Inward Type</option>
                  <option>Proposal</option>
                  <option>Miscellaneous</option>
                  <option>Endorsement</option>
                  <option>Replenishment</option>
                </select>

                <label>Co insurance* : </label>
                <select name="" id="">
                  <option value="">select</option>
                  <option value="">Yes</option>
                  <option value="">No</option>
                </select>

                <label>PPHC*:</label>
                <select name="" id="">
                  <option value="">select</option>
                  <option value="">Yes</option>
                  <option value="">No</option>
                </select>

                <label>Product Name*:</label>
                <select name="" id="">
                  <option value="">select product</option>
                  <option>Advance Loss of profit</option>
                  <option>Agriculture Pumpset Insurance</option>
                </select>

                <label>Submition Mode*:</label>
                <select name="" id="">
                  <option value="">select</option>
                  <option>Physical</option>
                  <option>Digital</option>
                </select>

                <label>RM Employee ID</label>
                <input type="text" />

                <label>Agreement Code*</label>
                <input type="text" />

                <label>SP code</label>
                <input type="text" />

                <label>Customer Name</label>
                <input type="text" />

                <label>Customer Type</label>
                <select name="" id="">
                  <option value="">select</option>
                  <option value="">Indivisual</option>
                  <option value="">Other Than Indivisual</option>
                </select>

                <label>Premium Amount</label>
                <input type="text" />

                <label >Proposal Signed Date</label>
                <input type="date" />

              </div>
              <div>
                <h3>Instrument Details</h3>
              </div>

              <div className={classes.form_div3}>
                <div className={classes.form}>
                  <label>Type</label>
                  <select name="" id="">
                    <option value="">select</option>
                    <option value="">EFT</option>
                    <option value="">Agent cash deposit</option>
                    <option value="">Bank Guarantee</option>
                    <option value="">Cash</option>
                    <option value="">Cheque</option>
                    <option value="">Credit Card</option>
                    <option value="">Customer Cash Deposit</option>
                    <option value="">Demand Draft</option>
                    <option value="">Customer Balance</option>
                  </select>
                </div>

                <div className={classes.form}>
                  <label>Number</label>
                  <input type="text" />
                </div>

                <div className={classes.form}>
                  <label>Amt</label>
                  <input type="text" />
                </div>

                <div className={classes.form}>
                  <label>Date</label>
                  <input type="date" />
                </div>

                <div className={classes.form}>
                  <IconButton
                    color="primary"
                    aria-label="add to shopping cart"
                    onClick={addDiv}
                  >
                    <Add fontSize="large" sx={{ color: "black" }} />
                  </IconButton>
                </div>
              </div>
              <div>
                {[...Array(count)].map((_, index) => (
                  <div className={classes.form_div3} key={index}>
                    <div className={classes.form}>
                      <label>Type</label>
                      <select name="" id="">
                        <option value="">select</option>
                        <option value="">EFT</option>
                        <option value="">Agent cash deposit</option>
                        <option value="">Bank Guarantee</option>
                        <option value="">Cash</option>
                        <option value="">Cheque</option>
                        <option value="">Credit Card</option>
                        <option value="">Customer Cash Deposit</option>
                        <option value="">Demand Draft</option>
                        <option value="">Customer Balance</option>
                      </select>
                    </div>

                    <div className={classes.form}>
                      <label>Number</label>
                      <input type="text" />
                    </div>

                    <div className={classes.form}>
                      <label>Amt</label>
                      <input type="text" />
                    </div>

                    <div className={classes.form}>
                      <label>Date</label>
                      <input type="date" />
                    </div>

                    <div className={classes.form}>
                      <IconButton aria-label="delete" onClick={deleteDiv}>
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  </div>
                ))}
              </div>

              <div className={classes.buttonDiv}>
                {/* <div className={classes.form_div5}>
                    <label >Proposal Signed Date</label>
                    <input type="date" />
                </div>
 
                <div className={classes.form_div5}>
                    <label >CKYC Available?</label>
                    <input type="radio" name="ckyc" />
                    <label >Yes</label>
                    <input type="radio" name="ckyc"/>
                    <label >No</label>
                </div>
 
                <div className={classes.form_div5}>
                    <label >Date of Birth</label>
                    <input type="date" />
                </div> */}
                <button type="button" className={classes.nextBtn} onClick={() => {
                  navigate('/inwardForm2');
                }}>
                  Next
                </button>
              </div>
            </form>
          </div>
      </div>
    </>
  );
};

export default InwardForm;