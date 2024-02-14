// fuction will take the name of the file name
import styles from  "./Navigation.module.css"
export const Headerfile = () => {
  return (
    <div className={`${styles.Headerfile}  container`}>
        <div className="logo">
            <img src="/images/Frame2.png" alt="logo" />
        </div>
        <div className="lis">
            <ul>
                <li>HOME</li>
                <li>ABOUT US</li>
                <li>CONTACT US</li>
            </ul>
        </div>
    </div>
  )
};

