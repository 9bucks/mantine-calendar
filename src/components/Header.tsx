import { ActionIcon, Box, Button, Card, Title } from '@mantine/core';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';


type HeaderProps = {
    title: string;
    onPreviousClick: () => void;
    onNextClick: () => void;
    onTodayClick: () => void;
};

function Header(props: HeaderProps) {
    return (
        <Box display="flex" style={{ marginBottom: 10, justifyContent: "space-between" }}>
            <Box display="flex">
                <Card display="flex" shadow="xs" padding="xs" radius="md" withBorder style={{ flexDirection: "row", alignItems: "center" }}>
                    <ActionIcon variant="filled" aria-label="Previous month" onClick={props.onPreviousClick} >
                        <IconChevronLeft />
                    </ActionIcon>
                    <Title order={5} style={{ width: "12rem", marginLeft: 8, marginRight: 8 }}>{props.title}</Title>
                    <ActionIcon variant="filled" aria-label="Next month" onClick={props.onNextClick} >
                        <IconChevronRight />
                    </ActionIcon>
                </Card>
            </Box>
            <Button variant="filled" aria-label="Today" onClick={props.onTodayClick}>
                Today
            </Button>
        </Box>
    );
}

export default Header;