import React, { useState } from 'react'
import { Button } from '../../UI/button/Button'
export function Edit() {
    const [open ,setOpen] = useState('')
  return (
    <div>
          <label
            style={{
              display: "flex",
              flexDirection: "column",
              fontWeight: "600",
            }}
          >
            Название Фильма:
            <input
              type="text"
              placeholder="название..."
              style={{ height: "30px", width: "100%", marginTop: "10px" }}
            />
          </label>

          <label
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "10px",
              fontWeight: "600",
            }}
          >
            Сссылка:
            <input
              type="url"
              placeholder="http/....."
              style={{ height: "30px", width: "100%", marginTop: "10px" }}
            />
          </label>

          <label
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "10px",
              fontWeight: "600",
            }}
          >
            Оценка:
            <input
              type="number"
              placeholder="от 1 дo 5"
              min="1"
              max="5"
              style={{ height: "30px", width: "100%", marginTop: "10px" }}
            />
          </label>

            <Button
              marginRight="20px"
              backgroundColor="brown"
            >
              Отмена
            </Button>
            <Button backgroundColor="gray">
              Обновить
            </Button>
    </div>
  )
}
