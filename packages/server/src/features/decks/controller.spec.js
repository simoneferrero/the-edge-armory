import DecksController from './controller'
import DecksModel from './model'

import { id, owner, values } from '../../mocks/decks'

describe('Given the `decks` controller', () => {
  const execute = jest.fn()
  const send = jest.fn()
  const res = {
    locals: {
      pool: {
        execute,
      },
    },
    type: jest.fn(),
    status: jest.fn(() => ({
      send,
    })),
  }
  const next = jest.fn()

  describe('and the `getAll` method', () => {
    const req = {
      user: {
        sub: owner,
      },
    }

    it('should work correctly', async () => {
      const decks = [
        {
          ...values,
          id,
        },
      ]
      execute.mockResolvedValueOnce([decks])
      await DecksController.getAll(req, res, next)

      expect(res.type).toHaveBeenCalledWith('application/json')
      expect(execute).toHaveBeenCalledWith(DecksModel.getAll(owner))
      expect(res.status).toHaveBeenCalledWith(200)
      expect(send).toHaveBeenCalledWith(JSON.stringify(decks))
    })

    describe('with an error', () => {
      it('should NOT break', async () => {
        execute.mockRejectedValue(new Error('Error message'))
        await DecksController.getAll(req, res, next)

        const expectedErrorResponse = JSON.stringify({
          error: {
            message: 'Error message',
          },
        })

        expect(res.status).not.toHaveBeenCalled()
        expect(next).toHaveBeenCalledWith(expectedErrorResponse)
      })
    })
  })

  describe('and the `post` method', () => {
    const req = {
      body: values,
      user: {
        sub: owner,
      },
    }

    it('should work correctly', async () => {
      const entry = {
        ...values,
        id,
      }
      execute.mockResolvedValueOnce([{ insertId: id }])
      execute.mockResolvedValueOnce([[entry]])
      await DecksController.post(req, res, next)

      expect(res.type).toHaveBeenCalledWith('application/json')
      expect(execute).toHaveBeenNthCalledWith(1, DecksModel.post(values))
      expect(res.status).toHaveBeenCalledWith(200)
      expect(execute).toHaveBeenNthCalledWith(2, DecksModel.get(owner, id))
      expect(send).toHaveBeenCalledWith(JSON.stringify(entry))
    })

    describe('with an error', () => {
      it('should NOT break', async () => {
        execute.mockRejectedValue(new Error('Error message'))
        await DecksController.post(req, res, next)

        const expectedErrorResponse = JSON.stringify({
          error: {
            message: 'Error message',
          },
        })

        expect(res.status).not.toHaveBeenCalled()
        expect(next).toHaveBeenCalledWith(expectedErrorResponse)
      })
    })
  })
})
