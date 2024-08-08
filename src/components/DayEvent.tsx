import { Card, Text } from '@mantine/core';

type DayEventProps = {
    title?: string;
};

function DayEvent(props: DayEventProps) {
    if (!props.title) {
        return null
    }
    return (
        <Card shadow="sm" padding="xs" radius="md" withBorder>
            <Text
                fw="bold"
                variant="gradient"
                gradient={{ from: 'violet', to: 'grape', deg: 90 }}
                truncate="end"
            >{props.title}</Text>
        </Card>
    );
}

export default DayEvent