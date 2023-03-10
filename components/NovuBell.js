import {
  NovuProvider,
  PopoverNotificationCenter,
  NotificationBell,
  useNotifications,
} from "@novu/notification-center";

import { getId } from "../pages/index.js";

function NovuBell({}) {
  return (
    <NovuProvider
      styles={{
        layout: {
          width: 200,
          background: "green",
        },
        footer: {
          root: {
            background: "red",
            display: "none",
          },
          title: {
            display: "none",
          },
        },
      }}
      subscriberId={getId()}
      applicationIdentifier={process.env.APP_ID}
    >
      <PopoverNotificationCenter colorScheme="dark">
        {({ unseenCount }) => <NotificationBell unseenCount={unseenCount} />}
      </PopoverNotificationCenter>
    </NovuProvider>
  );
}

export default NovuBell;
