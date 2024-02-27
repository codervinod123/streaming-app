import { BiLike, BiDislike } from "react-icons/bi";
import useTheme from '../utils/useTheme';

const Comment = ({ data }) => {

    const theme=useTheme();

    return (
        <div className='flex gap-2 shadow-sm'>

            <div className='mx-2 w-[40px] h-[40px]'>
                <img className='rounded-full' src={data.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="user" />
            </div>

            <div className={`${theme ? 'text-black' : 'text-white'}`}>

                <h1 className='text-[15px] font-semibold'>{data.snippet.topLevelComment.snippet.authorDisplayName}</h1>
                <h1>{data.snippet.topLevelComment.snippet.textDisplay.slice(0, 60)}</h1>

                <div className={`flex gap-4 py-2`}>
                    <BiLike
                        size={"1.5rem"}
                        className='cursor-pointer'
                    />

                    <BiDislike
                        size={"1.5rem"}
                        className='cursor-pointer'
                    />

                    <h1 className='text-[12px]'>Reply</h1>

                </div>
            </div>
        </div>
    )
}

export default Comment
