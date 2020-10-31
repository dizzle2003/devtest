import PropTypes from 'prop-types'

export const Post = PropTypes.shape({
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    author: PropTypes.object.isRequired,
    category: PropTypes.string,
    previewImage: PropTypes.string,
    votesCount: PropTypes.number.isRequired,
})