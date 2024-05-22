import useCustomMove from "../../hooks/useCustomMove";

const PageComponent = ({serverData, moveToList}) => {
    const {region, type, searchTerm} = useCustomMove();

    return ( 
      <div className="m-6 flex justify-center items-center">
  
        {
           serverData.prev ? <div className="text-sm cursor-pointer m-2 p-2 text-center font-bold shadow-md" onClick={() => moveToList({page:serverData.prevPage, region:region, type:type, searchTerm:searchTerm} )}>
           이전  </div> : <></>
        }  
  
        {
           serverData.pageNumList.map(pageNum => 
                <div  key={pageNum} className={`cursor-pointer m-2 p-2 w-8  text-center rounded-full shadow-md ${serverData.current === pageNum? 'bg-gray-500 text-white':''}`}
                  onClick={() => moveToList( {page:pageNum,  region:region, type:type, searchTerm:searchTerm})}>  
                 {pageNum}
                </div>  )
        }
  
        {
          serverData.next ?  <div  className="text-sm cursor-pointer m-2 p-2 text-center font-bold shadow-md" onClick={() => moveToList( {page:serverData.nextPage,  region:region, type:type, searchTerm:searchTerm})}> 
          다음  </div> : <></>
        }  
      </div>  
    );
  }
  export default PageComponent;
  
