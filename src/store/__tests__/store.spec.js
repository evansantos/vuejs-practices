/* global describe, it, expect, beforeAll, beforeEach, spyOn */
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

        await mutations.ADD_TODO_TASK(state, payload);
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

  // describe("Actions", () => {
  //   describe("Filter tasks", () => {
  //     it("Filter All tasks", async () => {
  //       const commit = spyOn(actions, "filterTasks");
  //       const payload = "all";

  //       actions.filterTasks({ commit }, payload);
  //       expect(commit).toHaveBeenCalled();
  //     });
  //   });
  // });

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
      const result = getters.items(state);
      expect(result).toHaveLength(4);
      expect(result).toEqual(state);
    });

    it("get only completed tasks", () => {
      state.showTasks = "complete";
      const result = getters.items(state);
      const filteredState = {
        ...state,
        items: state.items.filter(item => item.isComplete === true)
      };
      expect(result).toHaveLength(2);
      expect(result).toEqual(filteredState);
    });
  });
});
