import PropTypes from 'prop-types';

const Header = (props) => {
    const { heading } = props;

    const headerStyle = {
        padding: "20px 0",
        lineHeight: "1.5em",
    }

    const h1Style = { fontSize: "6rem", fontWeight: "600", marginBottom: "2rem", lineHeight: "1em", color: "blue", textAlign: "center" };

    return (
        <header style={headerStyle}>
            <h1 style={h1Style}>{heading}</h1>
        </header>
    );
}

Header.propTypes = {
    heading: PropTypes.string.isRequired,
}

export default Header;