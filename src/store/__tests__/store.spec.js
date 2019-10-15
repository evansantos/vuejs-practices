/* global describe, it, expect, beforeAll, beforeEach, afterEach, jest, spyOn */
import { mutations, actions, getters } from "@/store/store";

describe("Store testing", () => {
  describe("Mutations", () => {
    let state;

    describe("ADD_TODO_TASK", () => {
      beforeEach(() => {
        state = {
          items: [],
          showTasks: "all"
        };
      });

      it("Add item", async () => {
        const UUID = state.items.length + 1;

        const payload = {
          name: "Hello world!",
          id: UUID,
          isComplete: false
        };

        mutations.ADD_TODO_TASK(state, payload);
        expect(state.items).toEqual([payload]);
      });
    });

    describe("FILTER_TASKS", () => {
      beforeEach(() => {
        state = {
          items: [
            {
              name: "Hello world!",
              id: 1,
              isComplete: false
            },
            {
              name: "Olá mundo!",
              id: 2,
              isComplete: true
            },
            {
              name: "Hi!",
              id: 3,
              isComplete: false
            },
            {
              name: "hej!",
              id: 4,
              isComplete: true
            }
          ],
          showTasks: "all"
        };
      });

      it("show Completed", async () => {
        const payload = "completed";

        await mutations.FILTER_TASKS(state, payload);
        expect(state.showTasks).toEqual(payload);
      });

      it("Show Incompleted", async () => {
        const payload = "incompleted";

        await mutations.FILTER_TASKS(state, payload);
        expect(state.showTasks).toEqual(payload);
      });

      it("Show all", async () => {
        const payload = "all";

        await mutations.FILTER_TASKS(state, payload);
        expect(state.showTasks).toEqual(payload);
      });
    });
  });

  describe("Actions", () => {
    describe("Filter tasks", () => {
      let mockedFn;
      let spy;
      let payload;
      beforeEach(() => {
        mockedFn = jest.fn();
        spy = jest.spyOn(actions, "filterTasks");
      });

      afterEach(() => {
        spy.mockRestore();
      });

      it("Filter All tasks", async () => {
        payload = "all";

        actions.filterTasks({ commit: mockedFn }, payload);
        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledTimes(1);
      });

      it("Filter All completed tasks", async () => {
        payload = "completed";

        actions.filterTasks({ commit: mockedFn }, payload);
        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledTimes(1);
      });

      it("Filter All incompleted tasks", async () => {
        payload = "incompleted";

        actions.filterTasks({ commit: mockedFn }, payload);
        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledTimes(1);
      });
    });

    describe("add Todo to Task list", () => {
      it("add task", async () => {
        const mockedFn = jest.fn();
        const spy = jest.spyOn(actions, "addTodoTask");

        const payload = {
          name: "Hello world!",
          id: 1,
          isComplete: false
        };

        actions.addTodoTask({ commit: mockedFn }, payload);
        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledTimes(1);

        spy.mockRestore();
      });
    });
  });

  describe("Getters", () => {
    let state;
    beforeAll(() => {
      state = {
        items: [
          {
            name: "Hello world!",
            id: 1,
            isComplete: false
          },
          {
            name: "Olá mundo!",
            id: 2,
            isComplete: true
          },
          {
            name: "Hi!",
            id: 3,
            isComplete: false
          },
          {
            name: "hej!",
            id: 4,
            isComplete: true
          }
        ],
        showTasks: "all"
      };
    });

    it("show tasks", async () => {
      const result = getters.showTasks(state);
      expect(result).toEqual(state.showTasks);
    });

    it("get all items", () => {
      const result = getters.getItems(state);

      expect(result).toHaveLength(state.items.length);
    });

    it("get only completed tasks", () => {
      state.showTasks = "complete";
      const result = getters.getItems(state);

      const filteredState = state.items.filter(item => item.isComplete);
      expect(result).toHaveLength(filteredState.length);
    });

    it("get only incompleted tasks", () => {
      state.showTasks = "incomplete";
      const result = getters.getItems(state);

      const filteredState = state.items.filter(item => !item.isComplete);
      expect(result).toHaveLength(filteredState.length);
    });
  });
});
