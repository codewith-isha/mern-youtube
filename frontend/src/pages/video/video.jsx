import React from 'react'
import './video.css'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';

const Video = () => {
  return (
    <div className='video'>
      <div className="videoPostSection">
        <div className="video_youtube">
          <video width="400" controls autoPlay className='video_youtube_video'> 
            <source src={"https://youtu.be/V9vuCByb6js"} type='video/mp4' />

            <source src={"https://youtu.be/V9vuCByb6js"} type='video/webm' />
            Your Browser does not support the video tag.

          </video>
        </div>


        <div className="video_youtubeAbout">

          <div className="video_uTubeTitle">
            {"Javascript for Beginners"}
          </div>

          <div className="youtube_video_ProfileBlock">
            <div className="youtube_video_ProfileBlock_left">

              <div className="youtube_video_ProfileBlock_left_img">
                <img src="https://th.bing.com/th/id/OIP.hA04LwcrDABDbCzqGof8iQHaHa?rs=1&pid=ImgDetMain"  className="youtube_video_ProfileBlock_left_image" />
              </div>

              <div className="youtubeVideo_subsView">
                <div className="youtubePostProfileName">
                  {"User1"}
                </div>
                <div className="youtubePostProfileSubs">
                  {"2024-07-09"}
                </div>
              </div>
              <div className="subscribeBtnYoutube">Subscribe</div>

            </div>

            <div className="youtube_video_likeBlock">
               <div className="youtube_video_likeBlock_Like">
                <ThumbUpAltOutlinedIcon/>
                <div className="youtube_video_likeBlock_NoOfLikes">{32}</div>
                
               </div>
               
               <div className="youtubevideoDivider"></div>
               <div className="youtube_video_likeBlock_Like">
                <ThumbDownOutlinedIcon/>
                
               </div>



            </div>




          </div>
          <div className="youtube_video_About">
            <div>2024-08-30</div>
            <div>Gaurav</div>

          </div>



        </div>

        <div className="youtubeCommentSection">
           <div className="youtubeCommentSectionTitle">
            2 Comments
           </div>
           <div className="youtubeSelfComment">
            <img src="https://th.bing.com/th/id/OIP.hA04LwcrDABDbCzqGof8iQHaHa?rs=1&pid=ImgDetMain" className="video_youtubeSelfCommentProfile" />
            <div className="addAComment">
              <input type="text" className='addACommentInput' placeholder='Add a comment' />
              <div className="cancelSubmitComment">
                <div className="cancelComment">Cancel</div>
                <div className="cancelComment">Comment</div>

              </div>
            </div>
           </div>

           <div className="youtubeOthersComments">

            <div className="youtubeSelfComment">
               <img src="https://th.bing.com/th/id/OIP.hA04LwcrDABDbCzqGof8iQHaHa?rs=1&pid=ImgDetMain" className="video_youtubeSelfCommentProfile" />
               <div className="others_commentSection">
                <div className="others_commentSectionHeader">
                  <div className="channelName_comment">UserName</div>
                  <div className="commentTimingOthers">2024-09-30</div>
                </div>

                <div className="otherCommentSectionComment">
                 This is the Cool Web App Project
                </div>

               </div>
                {/* <div className="addAComment">
              <input type="text" className='addACommentInput' placeholder='Add a comment' />
              <div className="cancelSubmitComment">
                <div className="cancelComment">Cancel</div>
                <div className="cancelComment">Comment</div>

              </div>
            </div> */}
            </div>


             <div className="youtubeSelfComment">
               <img src="https://th.bing.com/th/id/OIP.hA04LwcrDABDbCzqGof8iQHaHa?rs=1&pid=ImgDetMain" className="video_youtubeSelfCommentProfile" />
               <div className="others_commentSection">
                <div className="others_commentSectionHeader">
                  <div className="channelName_comment">UserName</div>
                  <div className="commentTimingOthers">2024-09-30</div>
                </div>

                <div className="otherCommentSectionComment">
                 This is the Cool Web App Project
                </div>

               </div>
               
            </div>

            <div className="youtubeSelfComment">
               <img src="https://th.bing.com/th/id/OIP.hA04LwcrDABDbCzqGof8iQHaHa?rs=1&pid=ImgDetMain" className="video_youtubeSelfCommentProfile" />
               <div className="others_commentSection">
                <div className="others_commentSectionHeader">
                  <div className="channelName_comment">UserName</div>
                  <div className="commentTimingOthers">2024-09-30</div>
                </div>

                <div className="otherCommentSectionComment">
                 This is the Cool Web App Project
                </div>

               </div>
               
            </div>



           </div>
        </div>
      </div>
   
      <div className="videoSuggestions">
       <div className="videoSuggestionsBlock">
        <div className="video_suggestion_thumbnail">
          <img src="https://img.freepik.com/free-psd/creative-youtube-thumbnail-design-template_505751-6436.jpg" className='video_suggetion_thumbnail_img' />

        </div>
        <div className="video_suggetions_About">
          <div className="video_suggetions_About_title">
            T20 2024 WorldCup Final IND vs SA Last 5 overs #cricket #india
          </div>
          <div className="video_suggestions_About_Profile">
            Criket 320
          </div>
          <div className="video_suggestions_About_Profile">
            136K views . 1 day ago
          </div>
        </div>

       </div>


       <div className="videoSuggestionsBlock">
        <div className="video_suggestion_thumbnail">
          <img src="https://img.freepik.com/free-psd/creative-youtube-thumbnail-design-template_505751-6436.jpg" className='video_suggetion_thumbnail_img' />

        </div>
        <div className="video_suggetions_About">
          <div className="video_suggetions_About_title">
            T20 2024 WorldCup Final IND vs SA Last 5 overs #cricket #india
          </div>
          <div className="video_suggestions_About_Profile">
            Criket 320
          </div>
          <div className="video_suggestions_About_Profile">
            136K views . 1 day ago
          </div>
        </div>

       </div>

       <div className="videoSuggestionsBlock">
        <div className="video_suggestion_thumbnail">
          <img src="https://img.freepik.com/free-psd/creative-youtube-thumbnail-design-template_505751-6436.jpg" className='video_suggetion_thumbnail_img' />

        </div>
        <div className="video_suggetions_About">
          <div className="video_suggetions_About_title">
            T20 2024 WorldCup Final IND vs SA Last 5 overs #cricket #india
          </div>
          <div className="video_suggestions_About_Profile">
            Criket 320
          </div>
          <div className="video_suggestions_About_Profile">
            136K views . 1 day ago
          </div>
        </div>

       </div>


       <div className="videoSuggestionsBlock">
        <div className="video_suggestion_thumbnail">
          <img src="https://img.freepik.com/free-psd/creative-youtube-thumbnail-design-template_505751-6436.jpg" className='video_suggetion_thumbnail_img' />

        </div>
        <div className="video_suggetions_About">
          <div className="video_suggetions_About_title">
            T20 2024 WorldCup Final IND vs SA Last 5 overs #cricket #india
          </div>
          <div className="video_suggestions_About_Profile">
            Criket 320
          </div>
          <div className="video_suggestions_About_Profile">
            136K views . 1 day ago
          </div>
        </div>

       </div>

       <div className="videoSuggestionsBlock">
        <div className="video_suggestion_thumbnail">
          <img src="https://img.freepik.com/free-psd/creative-youtube-thumbnail-design-template_505751-6436.jpg" className='video_suggetion_thumbnail_img' />

        </div>
        <div className="video_suggetions_About">
          <div className="video_suggetions_About_title">
            T20 2024 WorldCup Final IND vs SA Last 5 overs #cricket #india
          </div>
          <div className="video_suggestions_About_Profile">
            Criket 320
          </div>
          <div className="video_suggestions_About_Profile">
            136K views . 1 day ago
          </div>
        </div>

       </div>


       <div className="videoSuggestionsBlock">
        <div className="video_suggestion_thumbnail">
          <img src="https://img.freepik.com/free-psd/creative-youtube-thumbnail-design-template_505751-6436.jpg" className='video_suggetion_thumbnail_img' />

        </div>
        <div className="video_suggetions_About">
          <div className="video_suggetions_About_title">
            T20 2024 WorldCup Final IND vs SA Last 5 overs #cricket #india
          </div>
          <div className="video_suggestions_About_Profile">
            Criket 320
          </div>
          <div className="video_suggestions_About_Profile">
            136K views . 1 day ago
          </div>
        </div>

       </div>

       <div className="videoSuggestionsBlock">
        <div className="video_suggestion_thumbnail">
          <img src="https://img.freepik.com/free-psd/creative-youtube-thumbnail-design-template_505751-6436.jpg" className='video_suggetion_thumbnail_img' />

        </div>
        <div className="video_suggetions_About">
          <div className="video_suggetions_About_title">
            T20 2024 WorldCup Final IND vs SA Last 5 overs #cricket #india
          </div>
          <div className="video_suggestions_About_Profile">
            Criket 320
          </div>
          <div className="video_suggestions_About_Profile">
            136K views . 1 day ago
          </div>
        </div>

       </div>


       <div className="videoSuggestionsBlock">
        <div className="video_suggestion_thumbnail">
          <img src="https://img.freepik.com/free-psd/creative-youtube-thumbnail-design-template_505751-6436.jpg" className='video_suggetion_thumbnail_img' />

        </div>
        <div className="video_suggetions_About">
          <div className="video_suggetions_About_title">
            T20 2024 WorldCup Final IND vs SA Last 5 overs #cricket #india
          </div>
          <div className="video_suggestions_About_Profile">
            Criket 320
          </div>
          <div className="video_suggestions_About_Profile">
            136K views . 1 day ago
          </div>
        </div>

       </div>

       <div className="videoSuggestionsBlock">
        <div className="video_suggestion_thumbnail">
          <img src="https://img.freepik.com/free-psd/creative-youtube-thumbnail-design-template_505751-6436.jpg" className='video_suggetion_thumbnail_img' />

        </div>
        <div className="video_suggetions_About">
          <div className="video_suggetions_About_title">
            T20 2024 WorldCup Final IND vs SA Last 5 overs #cricket #india
          </div>
          <div className="video_suggestions_About_Profile">
            Criket 320
          </div>
          <div className="video_suggestions_About_Profile">
            136K views . 1 day ago
          </div>
        </div>

       </div>
       
      </div>

      </div>
  )
}

export default Video