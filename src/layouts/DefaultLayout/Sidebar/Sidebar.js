import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import {
    HomeIcon,
    UseGroupIcon,
    LiveIcon,
    HomeActiveIcon,
    UseGroupActiveIcon,
    LiveActiveIcon,
} from '~/components/icons';
import SuggestedAccounts from '~/components/SuggestedAccounts/SuggestedAccounts';
import config from '~/config';

const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UseGroupIcon />}
                    activeIcon={<UseGroupActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>

            <SuggestedAccounts label="Suggested accounts" />
            <SuggestedAccounts label="Following accounts" />
        </aside>
    );
}

export default Sidebar;
