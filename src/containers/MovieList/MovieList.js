import React, { Component } from 'react';
import { Link } from 'react-router';
import DocumentMeta from 'react-document-meta';
import 'bootstrap-webpack';

// Global styles
import 'style!../../styles/main.scss';

// Application components
import { Header, Footer } from '../../components';

export default class MovieList extends Component {

    static propTypes = {
        children: React.PropTypes.object,
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
                            Search UI Here
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
