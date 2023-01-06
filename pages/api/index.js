import { Novu } from "@novu/node";
import { API_KEY } from "..";

const novu = new Novu(API_KEY);

const handler = async (req, res) => {
  try {
    const { status } = await novu.trigger("test-notification", {
      to: {
        subscriberId: req?.body?.subscriberId,
      },
      payload: {
        title: "This is a title",
        subtitle: "This is a subtitle",
      },
    });
    res.send(status);
  } catch (err) {
    console.log(err);
  }
};

export default handler;
