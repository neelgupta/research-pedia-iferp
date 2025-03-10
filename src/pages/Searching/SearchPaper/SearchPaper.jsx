import { Button } from "@/components";
import React, { useState } from "react";
import "./SearchPaper.scss";
import { icons } from "@/utils/constants";

const SearchPaper = () => {
  const [searchPaper, setsearchPaper] = useState([
    {
      title:
        "Reviewing the effectiveness of artificial intelligence techniques against cyber security risks",
      abstract:
        "The rapid increase in malicious cyber-criminal activities has made the field of cybersecurity a crucial research discipline. Over the areas, the advancement in information technology has...",

      LikeOrDislike: {
        like: true,
        dislike: false,
      },

      save: true,
    },
    {
      title:
        "Reviewing the effectiveness of artificial intelligence techniques against cyber security risks",
      abstract:
        "The rapid increase in malicious cyber-criminal activities has made the field of cybersecurity a crucial research discipline. Over the areas, the advancement in information technology has...",

      LikeOrDislike: {
        like: false,
        dislike: false,
      },
      save: false,
    },
    {
      title:
        "Reviewing the effectiveness of artificial intelligence techniques against cyber security risks",
      abstract:
        "The rapid increase in malicious cyber-criminal activities has made the field of cybersecurity a crucial research discipline. Over the areas, the advancement in information technology has...",

      LikeOrDislike: {
        like: false,
        dislike: true,
      },
      save: true,
    },
    {
      title:
        "Reviewing the effectiveness of artificial intelligence techniques against cyber security risks",
      abstract:
        "The rapid increase in malicious cyber-criminal activities has made the field of cybersecurity a crucial research discipline. Over the areas, the advancement in information technology has...",

      LikeOrDislike: {
        like: true,
        dislike: false,
      },
      save: true,
    },
  ]);

  const advancedSearch = true;
  return (
    <>
      <div id="SearchPaper">
        {advancedSearch && (
          <div className="advanced-search">
            <div className="d-flex justify-content-between">
              <div className="left-side">
                <div>
                  <span className="text-22-600 color-0303 mb-14">
                    Advanced Search found{" "}
                    <span className="text-22-600 color-113D"> 250 Papers </span>
                  </span>
                  <p>with "covid 19" in the full text</p>
                </div>
                <div className="mt-28">
                  <Button
                    btnText="Upgrade to view results"
                    rightIcon={icons.rightarrowWhite}
                    className="w-220 h-43"
                  />
                </div>
              </div>
              <div className="img-conatiner">
                <img src={icons.Advancepaper} alt="Advancepaper" />
              </div>
            </div>
          </div>
        )}

        <div className="search-topic">
          <div className="mt-24">
            <p className="text-16-400 color-3333">Search Results</p>
          </div>

          {searchPaper.map((item, index) => {
            return (
              <>
                <div className="searching mt-18 position-relative">
                  <div
                    className="position-absolute top-0 end-0 mt-18 me-10"
                    style={{ cursor: "pointer" }}
                  >
                    <img src={icons.actionIcons} alt="action" />
                  </div>
                  <div>
                    <h1 className="text-18-500 color-113D mb-8">
                      {item.title}
                    </h1>
                    <p className="text-16-40 color-0303">{item.abstract}</p>
                  </div>
                  <div className="mt-24">
                    <div className="d-flex gap-1 flex-wrap">
                      <Button
                        btnText="100% Topic Match"
                        btnStyle="LGG"
                        className="h-41"
                      />
                      <Button
                        btnText="0.8 Cit./Year"
                        btnStyle="LSB"
                        className="h-41"
                      />
                    </div>
                  </div>

                  <div className="mt-24">
                    <div className="d-flex align-items-center gap-1">
                      <div>
                        <img
                          src={icons.pdfpaper}
                          alt="docsIcons"
                          className="img-fluid"
                        />
                      </div>
                      <div>
                        <p className="text-14-400 color-3333">
                          Global International Journal of Innovative Research
                        </p>
                      </div>
                    </div>

                    <div className="mt-10">
                      <div className="d-flex justify-content-between flex-wrap">
                        <div className="d-flex align-items-center gap-1">
                          <img
                            src={icons?.userTwoIcons}
                            alt="docs-icons"
                            loading="lazy"
                            className="h-20 w-20 rounded-circle"
                          />
                          <p className="docs-title">Herry Nugraha + 4</p>
                        </div>
                        <div className="fa-center gap-md-2 gap-2">
                          <div className="fa-center gap-1">
                            <img
                              src={icons?.calenderIcons}
                              alt="docs-icons"
                              loading="lazy"
                              className="h-16 w-16 object-fit-contain"
                            />
                            <p className="docs-title">Jul 16, 2024</p>
                          </div>
                          <img
                            src={icons?.dotIcons}
                            alt="docs-icons"
                            loading="lazy"
                            className="h-5 w-5"
                          />
                          <div className="fa-center gap-1">
                            <img
                              src={icons?.eyeIcons}
                              alt="docs-icons"
                              loading="lazy"
                              className="h-16 w-16 object-fit-contain"
                            />
                            <p className="docs-title">31 Views</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="fb-center mt-24 gap-3">
                        <Button
                          btnText="Read Paper"
                          btnStyle="LBA"
                          className="h-43 ps-18 pe-18"
                          leftIcon={icons.bookIcons}
                          leftIconClass="h-16 w-16"
                        />
                        <div className="fa-center gap-3">
                          <Button
                            btnText="Ask Paper"
                            btnStyle="BTB"
                            className="h-43 ps-18 pe-18"
                            leftIcon={icons.messageIcons}
                            leftIconClass="h-16 w-16"
                          />
                          <Button
                            btnText="Relevant"
                            btnStyle="BTA"
                            className="h-43 ps-18 pe-18"
                            groupIcons={
                              item.LikeOrDislike.like === true &&
                              item.LikeOrDislike.dislike === false
                                ? [
                                    { icon: icons.activeupthump },
                                    { icon: icons.disactivedownthump },
                                  ]
                                : item.LikeOrDislike.like === false &&
                                    item.LikeOrDislike.dislike === true
                                  ? [
                                      { icon: icons.disactiveupthump },
                                      { icon: icons.activedownthump },
                                    ]
                                  : [
                                      { icon: icons.disactiveupthump },
                                      { icon: icons.disactivedownthump },
                                    ]
                            }
                          />
                          <Button
                            btnText="Listen"
                            btnStyle="BTA"
                            className="h-43 ps-18 pe-18"
                            leftIcon={icons.videoIcons}
                            leftIconClass="h-16 w-16"
                          />

                          <Button
                            btnStyle="BTA"
                            className="h-43 ps-18 pe-18"
                            leftIcon={
                              item.save ? icons.saveIcons : icons.disSave
                            }
                            leftIconClass="h-16 w-16"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );

  //     <div>
  //     {/* <div className="recommended-text">
  //       {activeTab === "topPapers" ? "Recommended for you" : "Conference"}
  //     </div> */}
  //     {papers.length > 0 ? (
  //       papers.map((papers, index) => {
  //         return (
  //           <div
  //             className="feed-published-box card-d mt-18 pointer"
  //             key={index}
  //           >
  //             {currentYear === papers.year && (
  //               <div className="fb-center">
  //                 <div className="post-published">
  //                   <img
  //                     src={icons?.lightIcons}
  //                     alt="light-icon"
  //                     loading="lazy"
  //                     className="h-12 w-12 object-fit-contain"
  //                   />
  //                   <p className="text-b">Just Published</p>
  //                 </div>
  //                 <div>
  //                   <img
  //                     src={icons?.actionIcons}
  //                     alt="action-icons"
  //                     loading="lazy"
  //                   />
  //                 </div>
  //               </div>
  //             )}
  //             <h4 className="post-title">
  //               {papers.title || papers?.paper_title || "null"}
  //             </h4>
  //             <p className="post-pra">
  //               {(papers.abstract && papers.abstract) ||
  //                 (papers.paper_abstract && papers.paper_abstract) ||
  //                 "null"}
  //             </p>
  //             {papers?.url && (
  //               <div className="docs-box">
  //                 <img
  //                   src={icons?.docsIcons}
  //                   alt="docs-icons"
  //                   loading="lazy"
  //                 />
  //                 <p className="docs-title">
  //                   <a
  //                     href={papers?.url}
  //                     className="docs-title hover-link"
  //                     target="_blank"
  //                   >
  //                     {papers?.url || "-"}
  //                   </a>
  //                 </p>
  //               </div>
  //             )}
  //             <div className="post-details flex-wrap mt-8 gap-2">
  //               <div className="fa-center gap-1">
  //                 <img
  //                   src={icons?.userTwoIcons}
  //                   alt="docs-icons"
  //                   loading="lazy"
  //                   className="h-20 w-20 rounded-circle"
  //                 />
  //                 <p className="docs-title">
  //                   {papers?.authors && papers.authors.length > 0 ? (
  //                     <>
  //                       {papers.authors[0].name}
  //                       {papers.authors.length > 1 &&
  //                         ` +${papers.authors.length - 1}`}
  //                     </>
  //                   ) : papers?.author_name ? (
  //                     papers.author_name
  //                   ) : (
  //                     "No Authors"
  //                   )}
  //                 </p>
  //               </div>
  //               <div className="fa-center gap-md-2 gap-2">
  //                 <div className="fa-center gap-1">
  //                   <img
  //                     src={icons?.calenderIcons}
  //                     alt="docs-icons"
  //                     loading="lazy"
  //                     className="h-16 w-16 object-fit-contain"
  //                   />
  //                   <p className="docs-title">
  //                     {papers.abstract_id
  //                       ? moment(papers.created_at).format("MMM DD,YYYY")
  //                       : papers.year}
  //                   </p>
  //                 </div>
  //                 <img
  //                   src={icons?.dotIcons}
  //                   alt="docs-icons"
  //                   loading="lazy"
  //                   className="h-5 w-5"
  //                 />
  //                 <div className="fa-center gap-1">
  //                   <img
  //                     src={icons?.eyeIcons}
  //                     alt="docs-icons"
  //                     loading="lazy"
  //                     className="h-16 w-16 object-fit-contain"
  //                   />
  //                   <p className="docs-title">31 Views</p>
  //                 </div>
  //               </div>
  //             </div>
  //             <div className="fb-center mt-24 gap-3">
  //               <Button
  //                 btnText="Read Paper"
  //                 btnStyle="LBA"
  //                 className="h-43 ps-18 pe-18"
  //                 leftIcon={icons.bookIcons}
  //                 leftIconClass="h-16 w-16"
  //                 onClick={() => {
  //                   handleReadPaper({
  //                     paperId: papers.paperId,
  //                     abstractId: papers.abstract_id || papers.abstractId,
  //                   });
  //                 }}
  //               />
  //               <div className="fa-center gap-3">
  //                 <div className="d-p">
  //                   <Button
  //                     btnText="Reposted"
  //                     btnStyle="BTA"
  //                     className="h-43 ps-18 pe-18"
  //                     leftIcon={icons.reloadIcons}
  //                     leftIconClass="h-16 w-16"
  //                     onClick={() => handleDropdownToggle(index)}
  //                   />
  //                   {openDropdown === index && (
  //                     <div className="dropdown-menus" ref={dropdownRef}>
  //                       <div
  //                         className="d-text"
  //                         onClick={() => {
  //                           setOpenDropdown(null);
  //                         }}
  //                       >
  //                         <h5 className="repost-text">
  //                           Repost with your thoughts
  //                         </h5>
  //                         <p className="repost-pra">
  //                           Share this post and your thoughts about it
  //                         </p>
  //                       </div>
  //                       <div
  //                         className="d-text mt-4"
  //                         onClick={() => {
  //                           setOpenDropdown(false);
  //                         }}
  //                       >
  //                         <h5 className="repost-text">Repost</h5>
  //                         <p className="repost-pra">
  //                           Instantly share this post with others
  //                         </p>
  //                       </div>
  //                     </div>
  //                   )}
  //                 </div>
  //                 <Button
  //                   btnText="Ask Paper"
  //                   btnStyle="BTB"
  //                   className="h-43 ps-18 pe-18"
  //                   leftIcon={icons.messageIcons}
  //                   leftIconClass="h-16 w-16"
  //                 />
  //                 <Button
  //                   btnText="Relevant"
  //                   btnStyle="BTA"
  //                   className="h-43 ps-18 pe-18"
  //                   groupIcons={[
  //                     { icon: icons.upThumIcons },
  //                     { icon: icons.downThumIcons },
  //                   ]}
  //                   leftIconClass="h-16 w-16"
  //                 />
  //                 <Button
  //                   btnText="Listen"
  //                   btnStyle="BTA"
  //                   className="h-43 ps-18 pe-18"
  //                   leftIcon={icons.videoIcons}
  //                   leftIconClass="h-16 w-16"
  //                 />
  //                 <Button
  //                   btnStyle="BTA"
  //                   className="h-43 ps-18 pe-18"
  //                   leftIcon={icons.saveIcons}
  //                   leftIconClass="h-16 w-16"
  //                 />
  //               </div>
  //             </div>
  //           </div>
  //         );
  //       })
  //     ) : (
  //       <div className="no-papers">
  //         <p>Paper not found</p>
  //       </div>
  //     )}
  //   </div>;
};

export default SearchPaper;
