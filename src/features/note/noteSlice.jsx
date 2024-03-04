import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://json-server-40tw.onrender.com/note";
export const getNotes = createAsyncThunk(
  "note/getNotes",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("error");
    }
  }
);
export const postNotes = createAsyncThunk(
  "note/postNotes",
  async (data, thunkAPI) => {
    try {
      const res = await axios.post(url, data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("error");
    }
  }
);
export const deleteNotes = createAsyncThunk(
  "note/deleteNotes",
  async (id, thunkAPI) => {
    try {
      const res = await axios.delete(`${url}/${id}`, { data: id });
      return parseInt(res.config.data);
    } catch (error) {
      return thunkAPI.rejectWithValue("error");
    }
  }
);
export const putNotes = createAsyncThunk(
  "note/putNotes",
  async (data, thunkAPI) => {
    try {
      const res = await axios.put(`${url}/${data.id}`, data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("error");
    }
  }
);
const initialState = {
  notes: [],
  search: "",
  type: "all",
  isLoading: true,
  error: "",
};

const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    setItemType: (state, { payload }) => {
      state.type = payload;
    },
    setItemSearch: (state, { payload }) => {
      state.search = payload.substring().toLowerCase();
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getNotes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNotes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.notes = action.payload;
      })
      .addCase(getNotes.rejected, (state) => {
        state.isLoading = false;
      });
    builder
      .addCase(postNotes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postNotes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.notes.push(action.payload);
      })
      .addCase(postNotes.rejected, (state) => {
        state.isLoading = false;
      });
    builder
      .addCase(deleteNotes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteNotes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.notes = state.notes.filter((note) => note.id !== action.payload);
      })
      .addCase(deleteNotes.rejected, (state) => {
        state.isLoading = false;
      });
    builder
      .addCase(putNotes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(putNotes.fulfilled, (state, action) => {
        state.isLoading = false;
        const updateNote = action.payload;
        const index = state.notes.findIndex(
          (note) => note.id === updateNote.id
        );
        if (index !== -1) {
          state.notes[index] = updateNote;
        }
      })
      .addCase(putNotes.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
export const { remove, setItemType, setItemSearch, add } = noteSlice.actions;
export default noteSlice.reducer;
