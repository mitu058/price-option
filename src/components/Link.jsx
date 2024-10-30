
const Link = ({route}) => {
    return (
        <li className='mr-10 hover:bg-red-500 px-2'><a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;