import React, { Component } from "react";
import { Link } from "react-router-dom";


class Main_section1_list extends Component {
  render() {
    return (
        <div className="main_section1_post" >
        <div className="notice_contents">
        <div className="notice_contents_back">
        <p className="pet_name"><a>{this.props.find.petname}</a> 찾아주세요!!</p>
        <p className="pet_breed">{`${this.props.find.petbreed} / ${this.props.find.petsex}`}</p>
        <p className="pet_lost_location"><a style={{borderBottom:"2px solid"}}>{this.props.find.location}</a></p>
        {/* <p className="pet_post_contents">{`${this.props.find.contents.slice(0,290)} ...`}</p> */}
        <p className="pet_post_contents">
              {
                this.props.find.contents.length > 160 ? 
                `${this.props.find.contents.slice(0,160)} ...` : this.props.find.contents
              }
        </p>
        </div>
        </div>
        <img src={this.props.find.petimage} className="main_pet_notice" alt="image" />
        </div>
    );
  }
}


class Main_section2_list extends Component {
  constructor(props){
    super(props)
  }

  render() {
    console.log(this.props.find)
    return (
      <Link to="/find">
        <article>
            <img className="main_section2_post" src={`${this.props.find.petimage}`} alt="idx" />
            <div className="article_title">{
              this.props.find.title.length > 24 ? 
              `${this.props.find.title.slice(0,24)} ...` : this.props.find.title
            }
            </div>
            <div className="article_location">실종장소: {this.props.find.location}</div>
            <div className="article_pet_inf">종류: {this.props.find.petbreed} / {this.props.find.petsex}</div>
            <div className="article_pet_reward">사례금: {this.props.find.reward}</div>
            <div className="article_pet_post_date">Date: {this.props.find.postdate}</div>
        </article>
      </Link>
    );
  }
}


class Main_section3_list extends Component {
  render() {
    // console.log(this.props.witness)
    // console.log(this.props.witness.title);
    return (
      <Link to="/find">
        <article>
            <img className="main_section2_post" src={`${this.props.witness.petimage}`} alt="idx" />
            {/* <div className="article_title">{this.props.witness.title}</div> */}
            <div className="article_title">{
              this.props.witness.title.length > 24 ? 
              `${this.props.witness.title.slice(0,24)} ...` : this.props.witness.title
            }
            </div>
            <div className="article_location">목격장소: {this.props.witness.location}</div>
            <div className="article_pet_inf">종류: {this.props.witness.petbreed} / {this.props.witness.petsex}</div>
            <div className="article_pet_post_date">Date: {this.props.witness.postdate}</div>
        </article>
      </Link>
    );
  }
}

export {
  Main_section1_list, 
  Main_section2_list, 
  Main_section3_list
}