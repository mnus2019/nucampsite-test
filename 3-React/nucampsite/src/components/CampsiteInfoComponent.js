import React,{Component} from "react";
import { Card, CardImg,CardBody,CardText, CardTitle } from 'reactstrap';
import {COMMENTS} from '../shared/comments';


class CampsiteInfo extends Component{
    constructor(props){
        super(props)
        this.state={
            comments:COMMENTS
        }
    }

    renderCampsite(campsite) {
        if (campsite) {
            return (
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        return <div />;
    }
    renderComments(comments) {
        if(comments){
            return(
                <div >
                    <h4>Comments</h4>
                    {comments.map(comment=>{
                        return(
                       <div key={comment.id}>
                            <div>{comment.text}</div>
                        <div>{comment.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
</div>
                       </div>
                        )

                    })}
                </div>
            )
        }

    }
    render(){
        const campsite = this.props.campsite;
        const comments = this.state.comments;
        return(
            
            <div className="row">
            <div className="col-md-5 m-1">
                {this.renderCampsite(campsite)}
            </div>
            <div className="col-md-5 m-1  ">
            {this.renderComments( comments)}

            </div>
        </div> 
        
        );
    }

}


export default CampsiteInfo;