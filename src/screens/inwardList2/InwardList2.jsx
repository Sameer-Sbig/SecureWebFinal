
 
import classes from './InwardList2.module.css'
 
const InwardList2 = () => {
 
 
 
    return <>
        <div>
 
 
 
            <div className={classes.Card}>
                <div>
                    Inward list
                </div>
                <div className={classes.gridMain}>
 
                    <label htmlFor="">Proposal No :</label>
                    <input></input>
                    <label>Customer Name</label>
                    <input></input>
 
                    <label>Agreement Code</label>
                    <input></input>
 
                    <label>Policy No</label>
                    <input></input>
 
 
                    <label>Proposal Signed Date</label>
                    <input></input>
 
 
                    <label>Co Insurance</label>
                    <input></input>
 
 
                    <label>PPHC</label>
                    <input></input>
 
 
                    <label>Inward Type Status</label>
                    <input></input>
 
                    <label>CYKC Exists</label>
                    <input></input>
 
                    <label>CKYC Number</label>
                    <input></input>
 
 
                    <label>Pan Number</label>
                    <input></input>
 
                    <label>Status History</label>
                    <input></input>
 
                    <label>Assigned Work Group</label>
                    <input></input>
 
 
                    <label>Assigned Branch</label>
                    <input></input>
                </div>
 
               
                <div className={classes.Grid2}>
                   
               
                        <label>Instrument Type</label>
                        <input></input>
 
                        <label>Instrument No</label>
                        <input></input>
 
                        <label>Instrument Amount</label>
                        <input></input>
 
 
 
                   
 
                   
 
 
 
 
 
                </div>

                <div className={classes.Grid3}>



                </div>
            </div>
        </div>
 
 
 
    </>
}
 
export default InwardList2;