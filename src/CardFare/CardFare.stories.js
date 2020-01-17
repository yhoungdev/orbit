// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";

import Button from "../Button";
import List, { ListItem } from "../List";
import Tooltip from "../Tooltip";
import Text from "../Text";
import Check from "../icons/Check";
import PricingTable, { PricingTableItem } from "../PricingTable";
import CardHeader from "../Card/components/Header";
import Stack from "../Stack";

import CardwithFares from "./index";

const title = text("title", "Select your ticket fare");
const description = text(
  "description",
  "Pay now for peace of mind. Save later if you need to make a necessary change to your tinerary. Learn More",
);

const CardFare = () => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <CardwithFares
      title="Standard Ticket"
      expanded={expanded}
      hidden={
        <List type="separated">
          <ListItem label="Kiwi.com services" icon={<Check size="small" color="success" />}>
            <Tooltip content="Extra info about provided service" stopPropagation>
              <Text>Premium.</Text>
            </Tooltip>
          </ListItem>
          <ListItem label="Rebooking" icon={<Check size="small" color="success" />}>
            <Tooltip content="Extra info about provided service" stopPropagation>
              <Text>Pay difference</Text>
            </Tooltip>
          </ListItem>
          <ListItem label="Email support" icon={<Check size="small" color="success" />}>
            <Text>Yes</Text>
          </ListItem>
          <ListItem label="Cancellation" icon={<Check size="small" color="success" />}>
            <Tooltip content="Extra info about provided service" stopPropagation>
              <Text>$10 processing fee</Text>
            </Tooltip>
          </ListItem>
        </List>
      }
      actions={
        <Button
          onClick={() => {
            setExpanded(false);
          }}
        >
          Change
        </Button>
      }
    >
      <Stack>
        <CardHeader title={title} description={description} />
        <PricingTable defaultActiveElement={1} dataTest="PricingTable">
          <PricingTableItem
            dataTest="PricingTableItem"
            name="Saver Ticket"
            priceBadge="230$"
            action={
              <Button
                onClick={ev => {
                  ev.stopPropagation();
                }}
                type="secondary"
                fullWidth
              >
                Don&#39;t upgrade
              </Button>
            }
            mobileDescription="Basic ticket fare includes:"
          >
            <List type="separated">
              <ListItem label="Kiwi.com services" icon={<Check size="small" color="success" />}>
                <Tooltip content="Extra info about provided service" stopPropagation>
                  <Text>Basic</Text>
                </Tooltip>
              </ListItem>
              <ListItem label="Rebooking" icon={<Check size="small" color="success" />}>
                <Tooltip content="Extra info about provided service" stopPropagation>
                  <Text>New ticket (-10 $)</Text>
                </Tooltip>
              </ListItem>
              <ListItem label="Email support" icon={<Check size="small" color="success" />}>
                <Text>Yes</Text>
              </ListItem>
              <ListItem label="Cancellation" icon={<Check size="small" color="success" />}>
                <Tooltip content="Extra info about provided service" stopPropagation>
                  <Text>$10 refund</Text>
                </Tooltip>
              </ListItem>
            </List>
          </PricingTableItem>
          <PricingTableItem
            dataTest="PricingTableItem"
            name="Standard Ticket"
            priceBadge="$ 276"
            badge="Recommended"
            action={
              <Button
                onClick={ev => {
                  setExpanded(true);
                  ev.stopPropagation();
                }}
                fullWidth
              >
                Upgrade and continue
              </Button>
            }
            mobileDescription="Flexi ticket fare includes:"
          >
            <List type="separated">
              <ListItem label="Kiwi.com services" icon={<Check size="small" color="success" />}>
                <Tooltip content="Extra info about provided service" stopPropagation>
                  <Text>Plus.</Text>
                </Tooltip>
              </ListItem>
              <ListItem label="Rebooking" icon={<Check size="small" color="success" />}>
                <Tooltip content="Extra info about provided service" stopPropagation>
                  <Text>Pay difference</Text>
                </Tooltip>
              </ListItem>
              <ListItem label="Email support" icon={<Check size="small" color="success" />}>
                <Text>Yes</Text>
              </ListItem>
              <ListItem label="Cancellation" icon={<Check size="small" color="success" />}>
                <Tooltip content="Extra info about provided service" stopPropagation>
                  <Text>$10 processing fee</Text>
                </Tooltip>
              </ListItem>
            </List>
          </PricingTableItem>
          <PricingTableItem
            dataTest="PricingTableItem"
            name="Flexi Ticket"
            priceBadge="$ 322"
            action={
              <Button
                onClick={ev => {
                  ev.stopPropagation();
                }}
                type="secondary"
                fullWidth
              >
                Upgrade and continue
              </Button>
            }
            mobileDescription="Premium ticket fare includes:"
          >
            <List type="separated">
              <ListItem label="Kiwi.com services" icon={<Check size="small" color="success" />}>
                <Tooltip content="Extra info about provided service" stopPropagation>
                  <Text>Premium.</Text>
                </Tooltip>
              </ListItem>
              <ListItem label="Rebooking" icon={<Check size="small" color="success" />}>
                <Tooltip content="Extra info about provided service" stopPropagation>
                  <Text>Pay difference</Text>
                </Tooltip>
              </ListItem>
              <ListItem label="Email support" icon={<Check size="small" color="success" />}>
                <Text>Yes</Text>
              </ListItem>
              <ListItem label="Cancellation" icon={<Check size="small" color="success" />}>
                <Tooltip content="Extra info about provided service" stopPropagation>
                  <Text>$10 processing fee</Text>
                </Tooltip>
              </ListItem>
            </List>
          </PricingTableItem>
        </PricingTable>
      </Stack>
    </CardwithFares>
  );
};

storiesOf("CardwithFares", module).add("Default", () => {
  return <CardFare />;
});
