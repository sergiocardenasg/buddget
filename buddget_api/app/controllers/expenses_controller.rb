class ExpensesController < ApplicationController
  before_action :get_budget, only: [:show, :create, :update, :destroy]
  #before_action :set_expense, only: [:show, :update, :destroy]

  # GET /expenses
  def index
    #@expenses = Expense.all
    @expenses = @budget.expenses

    render json: @expenses
  end

  # GET /expenses/1
  def show
    render json: @expense
  end

  # POST /expenses
  def create
    # @expense = Expense.new(expense_params)
    @expense = @budget.expenses.build(expense_params)
    # byebug
    # byebug
    if @expense.save
      render json: @expense, status: :created, location: @expense
    else
      render json: @expense.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /expenses/1
  def update
    if @expense.update(expense_params)
      render json: @expense
    else
      render json: @expense.errors, status: :unprocessable_entity
    end
  end

  # DELETE /expenses/1
  def destroy
    @expense.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_expense
      @expense = @budget.expenses.find(params[:id])
      # @expense = Expense.find(params[:id])
    end

    def get_budget
      @budget = Budget.find(params[:budget_id])
    end

    # Only allow a list of trusted parameters through.
    def expense_params
      params.require(:expense).permit(:name, :amount)
    end
end
