import { listOfUserOptions } from '../../../constants';

export default function ListOfOptions() {

    return (
        <ul>
            {
                listOfUserOptions.map((item, index) => (
                    <li key={item.key}>
                        <button
                            type={item.type}
                            title={item.title}
                            name={item.name}
                            id={item.id}
                            className={item.className}
                            aria-label={item.title}
                            onClick={async () => {
                                const { HandleUserNavigations } = await import('../../../utils');
                                HandleUserNavigations({
                                    id: item.id,
                                    type: 'onclick',
                                    index
                                });
                            }}
                        >
                            <div
                                className="user_options_navigation_icons_container"
                                data-id={item.id}
                            >
                                {item.icon}
                            </div>
                            <p>{item.title}</p>
                        </button>
                    </li>
                ))
            }
        </ul>
    );
};