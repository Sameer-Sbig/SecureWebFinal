import { useState } from "react";
import classes from "./InwardForm.module.css";

const InwardForm2 = () => {
    const [showCKYC , setShowCKYC] = useState("");
    const [fetchCKYC, setFetchCKYC] = useState(false);

  return (
    <>
      <div className={classes.main}>
        <div className={classes.form_div} style={{
            marginTop:"10px",
            width:"100%"
        }}>
          <form action="" className={classes.form}>
            <div className={classes.form_div4}>

              <div className={classes.form_div5}>
                <label>CKYC Available?</label>
                <input type="radio" name="ckyc" value={"Yes"} onChange={(e) => {
                    setShowCKYC(e.target.value);
                }} />
                <label>Yes</label>
                <input type="radio" name="ckyc" value={"No"} onChange={(e) => {
                    setShowCKYC(e.target.value);
                }}  
                />
                <label>No</label>
              </div>

              <div className={classes.form_div5}>
                <label>Date of Birth</label>
                <input type="date" />
              </div>

                { showCKYC == "Yes" &&
                <div className={classes.form_div5}>
                    <label >CKYC Number</label>
                    <input type="text" />
                </div>
                }

                { showCKYC == "Yes" &&
                <div style={{
                    gridColumn:"1/4"
                }}>
                    <button type="button" className={classes.nextBtn} onClick={() => {
                        setFetchCKYC(true);
                        console.log('fetch ckyc button pressed');
                    }}
                    >Fetch CKYC Details</button>
                </div>
                }

                { fetchCKYC == true ? 
                <div className={classes.form_div4} style={{gridColumn:"1/4"}}>
                    <div className={classes.form_div5}>
                        <label >Customer Name</label>
                        <input type="text" />
                    </div>

                    <div className={classes.form_div5}>
                        <label >DOB</label>
                        <input type="text" />
                    </div>

                    <div className={classes.form_div5}>
                        <label >CKYC Id</label>
                        <input type="text" />
                    </div>

                    <div className={classes.form_div5} >
                        <label >Proposal Document</label>
                        <input type="file" />
                    </div>

                </div>: <div></div>
                }
            </div>
            { fetchCKYC == true ?
                    <div className={classes.submitBtnDiv}>
                        <button className={classes.nextBtn}>Submit</button>
                    </div> : <div></div>
            }
          </form>
        </div>
      </div>
    </>
  );
};

export default InwardForm2;
