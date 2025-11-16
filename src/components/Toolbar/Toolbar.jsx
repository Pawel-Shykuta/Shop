import { useRef } from 'react'
import Styles from './ToolbarStyle.module.scss'
import Filters from '../Filters/Filters'


const Toolbar = ({sortItem, setSortItem, setFilters, filters}) =>{
    
    const detailsRef = useRef(null)

    const widthWindow = window.innerWidth > 450

    const SortChange = (value) =>{
        setSortItem(value)

        if(detailsRef.current){
            detailsRef.current.open = false;
        }
    }




    return(
        <section className={Styles.Toolbar_Wrapper}>
            <div className={Styles.Toolbar_Filter_Container}>
                <Filters filters={filters} setFilters={setFilters}/>
            </div>

            <div className={Styles.Toolbar_Sorting_Wrapper}>
                
                <details ref={detailsRef}>
                    <summary>{sortItem}</summary>

                    <ul>
                        {['New', 'Old', 'From-max', 'From-min'].map((item) =>(
                            <li key={item} onClick={() => SortChange(item)}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </details>


               <div className={Styles.Toolbar_Sorting_Items_Showing}>
                    {widthWindow && <>

                        <div className={`${Styles.Toolbar_Sorting_Item} ${Styles.Toolbar_One}`} title='Grid 3x3'>  
                            {[...Array(9)].map((_,i) =>(
                                <span key={i}></span>
                            ))}
                        </div>

                        <div className={`${Styles.Toolbar_Sorting_Item} ${Styles.Toolbar_Two}`} title='Grid 2x2'>  
                            {[...Array(4)].map((_,i) => (
                                <span key={i}></span>
                            ))}
                        </div>
                    </>}
   
               
                     <div className={`${Styles.Toolbar_Sorting_Item} ${Styles.Toolbar_Three}`} title='Grid 1x2'>  
                        {[...Array(2)].map((_,i) => (
                            <span key={i}></span>
                        ))}
                    </div>
                    <div className={`${Styles.Toolbar_Sorting_Item} ${Styles.Toolbar_Four}`} title='Grid 2x1'>  
                        {[...Array(2)].map((_,i) => (
                            <span key={i}></span>
                        ))}
                    </div>
                </div>                
                                   
            </div>
            
        </section>
    )
}

export default Toolbar
