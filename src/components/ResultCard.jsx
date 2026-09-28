
const ResultCard = ({item}) => {
  return (
    <div className='w-[18vw] h-80 bg-white rounded'>
        <div className="h-full"></div>
        {item.type == 'photo'?<img className='h-full w-full object-cover object-center' src={item.src} alt=""/>:''}
        {item.type == 'video'?<video className='h-full w-full object-cover object-center' autoPlay loop muted src={item.src}/>:''}

      <div id='bottom' className="h-[35%] w-full p-4absolute bottom-0 text-white"><h2 className="">{item.title}</h2></div>
    </div>
  )
}

export default ResultCard
