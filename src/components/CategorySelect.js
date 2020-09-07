import React, {Component} from "react";
import {Colors} from '../unility'



class CategorySelect extends Component {
    constructor(props) {
        super(props);
        this.state={
            selectedCategoryId: props.selectedCategory && props.selectedCategory.id

        }
    }

    selectCategory2 = (event, category) => {
        this.setState({
            selectedCategoryId:category.id
        })
        this.props.onSelectCategory(category)
        event.preventDefault()
    }


    render() {
        const {CategoriesOfSelect,selectedCategory} = this.props
        const selectedCategoryId = selectedCategory && selectedCategory.id

        return (

            <div className="row">
                {
                    CategoriesOfSelect.map((category, index) => {
                        const iconColor = (category.id === selectedCategoryId) ? Colors.white : Colors.gray;
                        const backColor = (category.id === selectedCategoryId) ? Colors.blue : Colors.lightGray;
                        const activeClassName = (selectedCategoryId ===category.id)?'category-item col-3 selectedCategory-active':'category-item col-3';
                        return (
                            <div className={activeClassName}
                                 onClick={(event) => {
                                     this.selectCategory2(event, category)
                                 }}>
                                <p color={iconColor}>{category.name}</p>
                            </div>
                        )
                    })
                }


            </div>
        );
    }

}

export default CategorySelect