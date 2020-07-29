import CollectionPreview from "../CollectionPreview/CollectionPreview";
import React, { Component } from "react";
import { connect } from "react-redux";
class CollectionOverview extends Component {
    render() {
        const { shop } = this.props;

        return shop.map(({ id, ...collectionProps }) => {
            return (
                <CollectionPreview
                    key={id}
                    id={id}
                    items={shop}
                    {...collectionProps}
                />
            );
        });
    }
}

const mapStateToProps = (state) => ({
    shop: state.shop.shop
})

export default connect(mapStateToProps, null)(CollectionOverview);
