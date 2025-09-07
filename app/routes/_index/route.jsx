import { Page, Layout, Card, Text, Button } from "@shopify/polaris";

export default function App() {
  return (
    <Page title="ShopBot Settings">
      <Layout>
        <Layout.Section>
          <Card>
            <Text variant="headingMd">Chatbot Settings</Text>
            <Text as="p">
              Enable or disable the chatbot for your storefront.
            </Text>
            <Button variant="primary">Enable Chatbot</Button>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}

