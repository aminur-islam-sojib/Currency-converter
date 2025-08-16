import { useRef } from 'react';
import { Dialog } from './Dialog';

const Header = ({ cartProduct }) => {

    const dialogRef = useRef(null)

    function showDialog() {
        dialogRef.current.showModal()
    }

    function closeDialog() {
        dialogRef.current.close()
    }

    return (
      <>
        <header>
          <div className="flex justify-between p-2">
            <ul className="flex gap-2 ">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Shop</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
            </ul>
            <div className="flex gap-1">
              <div className='relative'>
                <img className='cursor-pointer'
                onClick={showDialog}
                src="src\assets\shopping-cart.svg"
                alt=""
              />

              {cartProduct.length > 0 &&(
                <span className='dot'></span>
              )}

              </div>

              <p>Cart({cartProduct.length})</p>
            </div>
          </div>
        </header>
    
        <dialog ref={dialogRef} className='dialog'>
            <Dialog cartProduct={cartProduct}/>
            <button className='btn' onClick={closeDialog}>Close</button>
        </dialog>

      </>
    );
}
 



export { Header };

