import React from "react";
import {
  Container,
  Button,
  Typography,
  List,
  LinearProgress,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useTodos } from "../hooks/useTodos";
import { TodoItem } from "./TodoItem";
import { useDraftTodos } from "../hooks/useDraftTodos";
import { DraftTodoItem } from "./DraftTodoItem";
import { useShowLoader } from "../hooks/util-hooks";
import { getTodoId } from "../utils";

export function AdminDashboardPage() {
  const { loading, todos, ...todoActions } = useTodos();
  const { draftTodos, ...draftTodoActions } = useDraftTodos();
  const showLoader = useShowLoader(loading, 200);
  return (
    <Container className="main-container" maxWidth="sm">
      {loading ? (
        showLoader ? (
          <LinearProgress />
        ) : null
      ) : ( <div>
        <Typography component="p" variant="h5"> Admin Dashboard Page </Typography>
      </div>
      )}
    </Container>
  );
}
