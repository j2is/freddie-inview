import Store from ".";
import { v4 as uuidv4 } from "uuid";

const initialState = {
	isMenuActive: false,
	notifications: [],
};

function useAppStore() {
	const [state, setState] = Store.useStore(initialState);

	const setNotifications = (arr) =>
		setState((draft) => {
			draft.notifications = arr;
		});

	const addNotification = (message, isError) => {
		setState((draft) => {
			const newNotifications = [...draft.notifications];
			const key = uuidv4();
			draft.notifications = [...newNotifications, { key, message, isError }];
		});
	};

	const removeNotification = (key) => {
		setState((draft) => {
			const filtered =
				draft.notifications && draft.notifications.length > 1
					? draft.notifications.filter((item) => item.key !== key)
					: [];
			draft.notifications = filtered;
		});
	};

	const removeAllNotifications = () => {
		setState((draft) => {
			draft.notifications = [];
		});
	};

	const setIsMenuActive = (bool) =>
		setState((draft) => {
			draft.isMenuActive = bool;
		});

	return [
		state,
		{
			setIsMenuActive,
			setNotifications,
			addNotification,
			removeNotification,
			removeAllNotifications,
		},
	];
}

export { initialState, useAppStore };
