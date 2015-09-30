import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DocumentMeta from 'react-document-meta';
import * as movieActions from '../../actions/movies.js';

// Global styles
import '../../styles/main.scss';

// Application components
import { Header, Footer, Search, TitleList } from '../../components';

@connect(state => state.library)
export default class MovieList extends Component {
    constructor(props) {
        super(props);
        this.actions = bindActionCreators(movieActions, this.props.dispatch);
    }

    static propTypes = {
    }

    render() {
        const metaData = {
            title: 'OMDB Library',
            description: 'My Movie Library',
            canonical: 'http://example.com/path/to/page',
            meta: {
                charset: 'utf-8',
                name: {
                    keywords: 'react,meta,document,html,tags',
                },
            },
        };
        return (
            <section>
                <DocumentMeta {...metaData} />
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-ls-6">
                            <Search 
                                submitSearch={this.actions.submitSearch}
                                formError={this.props.formError}
                            />
                            <TitleList 
                                titles={this.props.titles}
                                searchString={this.props.searchString}
                            />
                        </div>
                        <div className="col-sm-6 col-ls-6">
                            Library UI here
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        );
    }
}
