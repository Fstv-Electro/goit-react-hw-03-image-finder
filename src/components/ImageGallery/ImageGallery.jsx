import { Component } from 'react';
import PropTypes from 'prop-types';
import fetchQuery from 'API/Api';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';
import css from './ImageGallery.module.css';

export default class ImageGallery extends Component {
    static propTypes = {
        onClick: PropTypes.func.isRequired,
        inputValue: PropTypes.string.isRequired,
    };

    state = {
        images: [],
        status: 'idle',
        statusBtn: true,
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.inputValue !== this.props.inputValue) {
            this.fetchLoad();
        }

        if (prevProps.page !== this.props.page && this.props.page > 1) {
            this.fetchLoadMore();
        }
    }

    fetchLoad = () => {
        const { inputValue, page } = this.props;

        fetchQuery(inputValue, page).then(res => {
            this.setState({
                images: res.hits,
                status: 'resolve',
                statusBtn: page < Math.ceil(res.totalHits / 12),
            });
        }).catch(error => this.setState({ status: 'rejected' }));
    };

    fetchLoadMore = () => {
        const { inputValue, page } = this.props;

        fetchQuery(inputValue, page).then(res => {

            this.setState(prevState => ({
                images: [...prevState.images, ...res.hits],
                status: 'resolve',
                statusBtn: page < Math.ceil(res.totalHits / 12),
            }));

        }).catch(error => this.setState({ status: 'rejected' }));
    };

    render() {
        const { images, status, statusBtn } = this.state;

        if (status === 'pending') {
            return <Loader />;
        }

        if (status === 'resolve') {
            return (
                <>
                    <ul className={css.gallery}>
                        {images.map(({ id, largeImageURL, tags }) => (
                            <ImageGalleryItem
                                key={id}
                                url={largeImageURL}
                                tags={tags}
                                onClick={this.props.onClick}
                            />
                        ))}
                    </ul>
                    {images.length !== 0 ? (
                       statusBtn && <Button onClick={this.props.LoadMoreBtn}/>
                    ) : (
                        alert('No result')
                    )}
                </>
            );
        }
    }
}